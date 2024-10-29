# `applicationLoadbalancerForwardingrule` Submodule <a name="`applicationLoadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancerForwardingrule <a name="ApplicationLoadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingrule(Construct Scope, string Id, ApplicationLoadbalancerForwardingruleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig">ApplicationLoadbalancerForwardingruleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig">ApplicationLoadbalancerForwardingruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules">PutHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetHttpRules">ResetHttpRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetServerCertificates">ResetServerCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHttpRules` <a name="PutHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules"></a>

```csharp
private void PutHttpRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationLoadbalancerForwardingruleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

---

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetClientTimeout"></a>

```csharp
private void ResetClientTimeout()
```

##### `ResetHttpRules` <a name="ResetHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetHttpRules"></a>

```csharp
private void ResetHttpRules()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetServerCertificates` <a name="ResetServerCertificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetServerCertificates"></a>

```csharp
private void ResetServerCertificates()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancerForwardingrule.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancerForwardingrule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancerForwardingrule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancerForwardingrule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationLoadbalancerForwardingrule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationLoadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRules">HttpRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList">ApplicationLoadbalancerForwardingruleHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference">ApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput">ApplicationLoadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRulesInput">HttpRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIpInput">ListenerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificatesInput">ServerCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId">ApplicationLoadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeout">ClientTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIp">ListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificates">ServerCertificates</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HttpRules`<sup>Required</sup> <a name="HttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRules"></a>

```csharp
public ApplicationLoadbalancerForwardingruleHttpRulesList HttpRules { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList">ApplicationLoadbalancerForwardingruleHttpRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeouts"></a>

```csharp
public ApplicationLoadbalancerForwardingruleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference">ApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `ApplicationLoadbalancerIdInput`<sup>Optional</sup> <a name="ApplicationLoadbalancerIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput"></a>

```csharp
public string ApplicationLoadbalancerIdInput { get; }
```

- *Type:* string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeoutInput"></a>

```csharp
public double ClientTimeoutInput { get; }
```

- *Type:* double

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `HttpRulesInput`<sup>Optional</sup> <a name="HttpRulesInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRulesInput"></a>

```csharp
public object HttpRulesInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenerIpInput`<sup>Optional</sup> <a name="ListenerIpInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIpInput"></a>

```csharp
public string ListenerIpInput { get; }
```

- *Type:* string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `ServerCertificatesInput`<sup>Optional</sup> <a name="ServerCertificatesInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificatesInput"></a>

```csharp
public string[] ServerCertificatesInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ApplicationLoadbalancerId`<sup>Required</sup> <a name="ApplicationLoadbalancerId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId"></a>

```csharp
public string ApplicationLoadbalancerId { get; }
```

- *Type:* string

---

##### `ClientTimeout`<sup>Required</sup> <a name="ClientTimeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeout"></a>

```csharp
public double ClientTimeout { get; }
```

- *Type:* double

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIp"></a>

```csharp
public string ListenerIp { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `ServerCertificates`<sup>Required</sup> <a name="ServerCertificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificates"></a>

```csharp
public string[] ServerCertificates { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerForwardingruleConfig <a name="ApplicationLoadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApplicationLoadbalancerId,
    string DatacenterId,
    string ListenerIp,
    double ListenerPort,
    string Name,
    string Protocol,
    double ClientTimeout = null,
    object HttpRules = null,
    string Id = null,
    string[] ServerCertificates = null,
    ApplicationLoadbalancerForwardingruleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId">ApplicationLoadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerIp">ListenerIp</a></code> | <code>string</code> | Listening (inbound) IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Listening (inbound) port number; valid range is 1 to 65535. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.name">Name</a></code> | <code>string</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Balancing protocol. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.clientTimeout">ClientTimeout</a></code> | <code>double</code> | The maximum time in milliseconds to wait for the client to acknowledge or send data; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.httpRules">HttpRules</a></code> | <code>object</code> | http_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.serverCertificates">ServerCertificates</a></code> | <code>string[]</code> | Array of items in the collection. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApplicationLoadbalancerId`<sup>Required</sup> <a name="ApplicationLoadbalancerId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId"></a>

```csharp
public string ApplicationLoadbalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerIp"></a>

```csharp
public string ListenerIp { get; set; }
```

- *Type:* string

Listening (inbound) IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#listener_ip ApplicationLoadbalancerForwardingrule#listener_ip}

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Listening (inbound) port number; valid range is 1 to 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#listener_port ApplicationLoadbalancerForwardingrule#listener_port}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Balancing protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#protocol ApplicationLoadbalancerForwardingrule#protocol}

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.clientTimeout"></a>

```csharp
public double ClientTimeout { get; set; }
```

- *Type:* double

The maximum time in milliseconds to wait for the client to acknowledge or send data;

default is 50,000 (50 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#client_timeout ApplicationLoadbalancerForwardingrule#client_timeout}

---

##### `HttpRules`<sup>Optional</sup> <a name="HttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.httpRules"></a>

```csharp
public object HttpRules { get; set; }
```

- *Type:* object

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#http_rules ApplicationLoadbalancerForwardingrule#http_rules}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ServerCertificates`<sup>Optional</sup> <a name="ServerCertificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.serverCertificates"></a>

```csharp
public string[] ServerCertificates { get; set; }
```

- *Type:* string[]

Array of items in the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#server_certificates ApplicationLoadbalancerForwardingrule#server_certificates}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.timeouts"></a>

```csharp
public ApplicationLoadbalancerForwardingruleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#timeouts ApplicationLoadbalancerForwardingrule#timeouts}

---

### ApplicationLoadbalancerForwardingruleHttpRules <a name="ApplicationLoadbalancerForwardingruleHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleHttpRules {
    string Name,
    string Type,
    object Conditions = null,
    string ContentType = null,
    object DropQuery = null,
    string Location = null,
    string ResponseMessage = null,
    double StatusCode = null,
    string TargetGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.name">Name</a></code> | <code>string</code> | The unique name of the Application Load Balancer HTTP rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.type">Type</a></code> | <code>string</code> | Type of the HTTP rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.conditions">Conditions</a></code> | <code>object</code> | conditions block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.contentType">ContentType</a></code> | <code>string</code> | Valid only for STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.dropQuery">DropQuery</a></code> | <code>object</code> | Default is false; valid only for REDIRECT actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.location">Location</a></code> | <code>string</code> | The location for redirecting; mandatory and valid only for REDIRECT actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.responseMessage">ResponseMessage</a></code> | <code>string</code> | The response message of the request; mandatory for STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.statusCode">StatusCode</a></code> | <code>double</code> | Valid only for REDIRECT and STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.targetGroup">TargetGroup</a></code> | <code>string</code> | The ID of the target group; mandatory and only valid for FORWARD actions. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The unique name of the Application Load Balancer HTTP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the HTTP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.conditions"></a>

```csharp
public object Conditions { get; set; }
```

- *Type:* object

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#conditions ApplicationLoadbalancerForwardingrule#conditions}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Valid only for STATIC actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#content_type ApplicationLoadbalancerForwardingrule#content_type}

---

##### `DropQuery`<sup>Optional</sup> <a name="DropQuery" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.dropQuery"></a>

```csharp
public object DropQuery { get; set; }
```

- *Type:* object

Default is false; valid only for REDIRECT actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#drop_query ApplicationLoadbalancerForwardingrule#drop_query}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for redirecting; mandatory and valid only for REDIRECT actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#location ApplicationLoadbalancerForwardingrule#location}

---

##### `ResponseMessage`<sup>Optional</sup> <a name="ResponseMessage" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.responseMessage"></a>

```csharp
public string ResponseMessage { get; set; }
```

- *Type:* string

The response message of the request; mandatory for STATIC actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#response_message ApplicationLoadbalancerForwardingrule#response_message}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.statusCode"></a>

```csharp
public double StatusCode { get; set; }
```

- *Type:* double

Valid only for REDIRECT and STATIC actions.

For REDIRECT actions, default is 301 and possible values are 301, 302, 303, 307, and 308. For STATIC actions, default is 503 and valid range is 200 to 599.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#status_code ApplicationLoadbalancerForwardingrule#status_code}

---

##### `TargetGroup`<sup>Optional</sup> <a name="TargetGroup" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.targetGroup"></a>

```csharp
public string TargetGroup { get; set; }
```

- *Type:* string

The ID of the target group; mandatory and only valid for FORWARD actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#target_group ApplicationLoadbalancerForwardingrule#target_group}

---

### ApplicationLoadbalancerForwardingruleHttpRulesConditions <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleHttpRulesConditions {
    string Type,
    string Condition = null,
    string Key = null,
    object Negate = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.type">Type</a></code> | <code>string</code> | Type of the HTTP rule condition. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.condition">Condition</a></code> | <code>string</code> | Matching rule for the HTTP rule condition attribute; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.key">Key</a></code> | <code>string</code> | Must be null when type is PATH, METHOD, HOST, or SOURCE_IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.negate">Negate</a></code> | <code>object</code> | Specifies whether the condition is negated or not; the default is False. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.value">Value</a></code> | <code>string</code> | Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH; |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the HTTP rule condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Matching rule for the HTTP rule condition attribute;

mandatory for HEADER, PATH, QUERY, METHOD, HOST, and COOKIE types; must be null when type is SOURCE_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#condition ApplicationLoadbalancerForwardingrule#condition}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Must be null when type is PATH, METHOD, HOST, or SOURCE_IP.

Key can only be set when type is COOKIES, HEADER, or QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#key ApplicationLoadbalancerForwardingrule#key}

---

##### `Negate`<sup>Optional</sup> <a name="Negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.negate"></a>

```csharp
public object Negate { get; set; }
```

- *Type:* object

Specifies whether the condition is negated or not; the default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#negate ApplicationLoadbalancerForwardingrule#negate}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH;

must be null when condition is EXISTS; should be a valid CIDR if provided and if type is SOURCE_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#value ApplicationLoadbalancerForwardingrule#value}

---

### ApplicationLoadbalancerForwardingruleTimeouts <a name="ApplicationLoadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.1/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerForwardingruleHttpRulesConditionsList <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditionsList" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleHttpRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get"></a>

```csharp
private ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetNegate">ResetNegate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetNegate` <a name="ResetNegate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetNegate"></a>

```csharp
private void ResetNegate()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negateInput">NegateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate">Negate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `NegateInput`<sup>Optional</sup> <a name="NegateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negateInput"></a>

```csharp
public object NegateInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Negate`<sup>Required</sup> <a name="Negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate"></a>

```csharp
public object Negate { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationLoadbalancerForwardingruleHttpRulesList <a name="ApplicationLoadbalancerForwardingruleHttpRulesList" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleHttpRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get"></a>

```csharp
private ApplicationLoadbalancerForwardingruleHttpRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationLoadbalancerForwardingruleHttpRulesOutputReference <a name="ApplicationLoadbalancerForwardingruleHttpRulesOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleHttpRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetDropQuery">ResetDropQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetResponseMessage">ResetResponseMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetTargetGroup">ResetTargetGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* object

---

##### `ResetConditions` <a name="ResetConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetDropQuery` <a name="ResetDropQuery" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetDropQuery"></a>

```csharp
private void ResetDropQuery()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetResponseMessage` <a name="ResetResponseMessage" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetResponseMessage"></a>

```csharp
private void ResetResponseMessage()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetStatusCode"></a>

```csharp
private void ResetStatusCode()
```

##### `ResetTargetGroup` <a name="ResetTargetGroup" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetTargetGroup"></a>

```csharp
private void ResetTargetGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList">ApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQueryInput">DropQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessageInput">ResponseMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroupInput">TargetGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery">DropQuery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage">ResponseMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup">TargetGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions"></a>

```csharp
public ApplicationLoadbalancerForwardingruleHttpRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList">ApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditionsInput"></a>

```csharp
public object ConditionsInput { get; }
```

- *Type:* object

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `DropQueryInput`<sup>Optional</sup> <a name="DropQueryInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQueryInput"></a>

```csharp
public object DropQueryInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResponseMessageInput`<sup>Optional</sup> <a name="ResponseMessageInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessageInput"></a>

```csharp
public string ResponseMessageInput { get; }
```

- *Type:* string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCodeInput"></a>

```csharp
public double StatusCodeInput { get; }
```

- *Type:* double

---

##### `TargetGroupInput`<sup>Optional</sup> <a name="TargetGroupInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroupInput"></a>

```csharp
public string TargetGroupInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `DropQuery`<sup>Required</sup> <a name="DropQuery" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery"></a>

```csharp
public object DropQuery { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResponseMessage`<sup>Required</sup> <a name="ResponseMessage" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage"></a>

```csharp
public string ResponseMessage { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `TargetGroup`<sup>Required</sup> <a name="TargetGroup" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup"></a>

```csharp
public string TargetGroup { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ApplicationLoadbalancerForwardingruleTimeoutsOutputReference <a name="ApplicationLoadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerForwardingruleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



