# `networkloadbalancerForwardingrule` Submodule <a name="`networkloadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkloadbalancerForwardingrule <a name="NetworkloadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule ionoscloud_networkloadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingrule(Construct Scope, string Id, NetworkloadbalancerForwardingruleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig">NetworkloadbalancerForwardingruleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig">NetworkloadbalancerForwardingruleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck"></a>

```csharp
private void PutHealthCheck(NetworkloadbalancerForwardingruleHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets"></a>

```csharp
private void PutTargets(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTargets.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts"></a>

```csharp
private void PutTimeouts(NetworkloadbalancerForwardingruleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NetworkloadbalancerForwardingrule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NetworkloadbalancerForwardingrule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NetworkloadbalancerForwardingrule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

NetworkloadbalancerForwardingrule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a NetworkloadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkloadbalancerForwardingrule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkloadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the NetworkloadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference">NetworkloadbalancerForwardingruleHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targets">Targets</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList">NetworkloadbalancerForwardingruleTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference">NetworkloadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIpInput">ListenerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPortInput">ListenerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput">NetworkloadbalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targetsInput">TargetsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIp">ListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPort">ListenerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerId">NetworkloadbalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheck"></a>

```csharp
public NetworkloadbalancerForwardingruleHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference">NetworkloadbalancerForwardingruleHealthCheckOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targets"></a>

```csharp
public NetworkloadbalancerForwardingruleTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList">NetworkloadbalancerForwardingruleTargetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeouts"></a>

```csharp
public NetworkloadbalancerForwardingruleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference">NetworkloadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.healthCheckInput"></a>

```csharp
public NetworkloadbalancerForwardingruleHealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ListenerIpInput`<sup>Optional</sup> <a name="ListenerIpInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIpInput"></a>

```csharp
public string ListenerIpInput { get; }
```

- *Type:* string

---

##### `ListenerPortInput`<sup>Optional</sup> <a name="ListenerPortInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPortInput"></a>

```csharp
public double ListenerPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkloadbalancerIdInput`<sup>Optional</sup> <a name="NetworkloadbalancerIdInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerIdInput"></a>

```csharp
public string NetworkloadbalancerIdInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.targetsInput"></a>

```csharp
public object TargetsInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerIp"></a>

```csharp
public string ListenerIp { get; }
```

- *Type:* string

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.listenerPort"></a>

```csharp
public double ListenerPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkloadbalancerId`<sup>Required</sup> <a name="NetworkloadbalancerId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.networkloadbalancerId"></a>

```csharp
public string NetworkloadbalancerId { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingrule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkloadbalancerForwardingruleConfig <a name="NetworkloadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Algorithm,
    string DatacenterId,
    string ListenerIp,
    double ListenerPort,
    string Name,
    string NetworkloadbalancerId,
    string Protocol,
    object Targets,
    NetworkloadbalancerForwardingruleHealthCheck HealthCheck = null,
    string Id = null,
    NetworkloadbalancerForwardingruleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.algorithm">Algorithm</a></code> | <code>string</code> | Algorithm for the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerIp">ListenerIp</a></code> | <code>string</code> | Listening IP. (inbound). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerPort">ListenerPort</a></code> | <code>double</code> | Listening port number. (inbound) (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.name">Name</a></code> | <code>string</code> | A name of that Network Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId">NetworkloadbalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.protocol">Protocol</a></code> | <code>string</code> | Protocol of the balancing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.targets">Targets</a></code> | <code>object</code> | targets block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Algorithm for the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#algorithm NetworkloadbalancerForwardingrule#algorithm}

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#datacenter_id NetworkloadbalancerForwardingrule#datacenter_id}.

---

##### `ListenerIp`<sup>Required</sup> <a name="ListenerIp" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerIp"></a>

```csharp
public string ListenerIp { get; set; }
```

- *Type:* string

Listening IP. (inbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#listener_ip NetworkloadbalancerForwardingrule#listener_ip}

---

##### `ListenerPort`<sup>Required</sup> <a name="ListenerPort" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.listenerPort"></a>

```csharp
public double ListenerPort { get; set; }
```

- *Type:* double

Listening port number. (inbound) (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#listener_port NetworkloadbalancerForwardingrule#listener_port}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name of that Network Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#name NetworkloadbalancerForwardingrule#name}

---

##### `NetworkloadbalancerId`<sup>Required</sup> <a name="NetworkloadbalancerId" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.networkloadbalancerId"></a>

```csharp
public string NetworkloadbalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#networkloadbalancer_id NetworkloadbalancerForwardingrule#networkloadbalancer_id}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Protocol of the balancing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#protocol NetworkloadbalancerForwardingrule#protocol}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.targets"></a>

```csharp
public object Targets { get; set; }
```

- *Type:* object

targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#targets NetworkloadbalancerForwardingrule#targets}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.healthCheck"></a>

```csharp
public NetworkloadbalancerForwardingruleHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#id NetworkloadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleConfig.property.timeouts"></a>

```csharp
public NetworkloadbalancerForwardingruleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts">NetworkloadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#timeouts NetworkloadbalancerForwardingrule#timeouts}

---

### NetworkloadbalancerForwardingruleHealthCheck <a name="NetworkloadbalancerForwardingruleHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleHealthCheck {
    double ClientTimeout = null,
    double ConnectTimeout = null,
    double Retries = null,
    double TargetTimeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.clientTimeout">ClientTimeout</a></code> | <code>double</code> | ClientTimeout is expressed in milliseconds. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.retries">Retries</a></code> | <code>double</code> | Retries specifies the number of retries to perform on a target VM after a connection failure. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.targetTimeout">TargetTimeout</a></code> | <code>double</code> | TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side. |

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.clientTimeout"></a>

```csharp
public double ClientTimeout { get; set; }
```

- *Type:* double

ClientTimeout is expressed in milliseconds.

This inactivity timeout applies when the client is expected to acknowledge or send data. If unset the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#client_timeout NetworkloadbalancerForwardingrule#client_timeout}

---

##### `ConnectTimeout`<sup>Optional</sup> <a name="ConnectTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; set; }
```

- *Type:* double

It specifies the maximum time (in milliseconds) to wait for a connection attempt to a target VM to succeed.

If unset, the default of 5 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#connect_timeout NetworkloadbalancerForwardingrule#connect_timeout}

---

##### `Retries`<sup>Optional</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.retries"></a>

```csharp
public double Retries { get; set; }
```

- *Type:* double

Retries specifies the number of retries to perform on a target VM after a connection failure.

If unset, the default value of 3 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#retries NetworkloadbalancerForwardingrule#retries}

---

##### `TargetTimeout`<sup>Optional</sup> <a name="TargetTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck.property.targetTimeout"></a>

```csharp
public double TargetTimeout { get; set; }
```

- *Type:* double

TargetTimeout specifies the maximum inactivity time (in milliseconds) on the target VM side.

If unset, the default of 50 seconds will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#target_timeout NetworkloadbalancerForwardingrule#target_timeout}

---

### NetworkloadbalancerForwardingruleTargets <a name="NetworkloadbalancerForwardingruleTargets" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTargets {
    string Ip,
    double Port,
    double Weight,
    NetworkloadbalancerForwardingruleTargetsHealthCheck HealthCheck = null,
    string ProxyProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.ip">Ip</a></code> | <code>string</code> | IP of a balanced target VM. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.port">Port</a></code> | <code>double</code> | Port of the balanced target service. (range: 1 to 65535). |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.weight">Weight</a></code> | <code>double</code> | Weight parameter is used to adjust the target VM's weight relative to other target VMs. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.proxyProtocol">ProxyProtocol</a></code> | <code>string</code> | Proxy protocol version. |

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

IP of a balanced target VM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#ip NetworkloadbalancerForwardingrule#ip}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port of the balanced target service. (range: 1 to 65535).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#port NetworkloadbalancerForwardingrule#port}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Weight parameter is used to adjust the target VM's weight relative to other target VMs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#weight NetworkloadbalancerForwardingrule#weight}

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.healthCheck"></a>

```csharp
public NetworkloadbalancerForwardingruleTargetsHealthCheck HealthCheck { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#health_check NetworkloadbalancerForwardingrule#health_check}

---

##### `ProxyProtocol`<sup>Optional</sup> <a name="ProxyProtocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargets.property.proxyProtocol"></a>

```csharp
public string ProxyProtocol { get; set; }
```

- *Type:* string

Proxy protocol version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#proxy_protocol NetworkloadbalancerForwardingrule#proxy_protocol}

---

### NetworkloadbalancerForwardingruleTargetsHealthCheck <a name="NetworkloadbalancerForwardingruleTargetsHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTargetsHealthCheck {
    object Check = null,
    double CheckInterval = null,
    object Maintenance = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.check">Check</a></code> | <code>object</code> | Check specifies whether the target VM's health is checked. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.checkInterval">CheckInterval</a></code> | <code>double</code> | CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.maintenance">Maintenance</a></code> | <code>object</code> | Maintenance specifies if a target VM should be marked as down, even if it is not. |

---

##### `Check`<sup>Optional</sup> <a name="Check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.check"></a>

```csharp
public object Check { get; set; }
```

- *Type:* object

Check specifies whether the target VM's health is checked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#check NetworkloadbalancerForwardingrule#check}

---

##### `CheckInterval`<sup>Optional</sup> <a name="CheckInterval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.checkInterval"></a>

```csharp
public double CheckInterval { get; set; }
```

- *Type:* double

CheckInterval determines the duration (in milliseconds) between consecutive health checks. If unspecified a default of 2000 ms is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#check_interval NetworkloadbalancerForwardingrule#check_interval}

---

##### `Maintenance`<sup>Optional</sup> <a name="Maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck.property.maintenance"></a>

```csharp
public object Maintenance { get; set; }
```

- *Type:* object

Maintenance specifies if a target VM should be marked as down, even if it is not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#maintenance NetworkloadbalancerForwardingrule#maintenance}

---

### NetworkloadbalancerForwardingruleTimeouts <a name="NetworkloadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#create NetworkloadbalancerForwardingrule#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#default NetworkloadbalancerForwardingrule#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#delete NetworkloadbalancerForwardingrule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.5.1/docs/resources/networkloadbalancer_forwardingrule#update NetworkloadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkloadbalancerForwardingruleHealthCheckOutputReference <a name="NetworkloadbalancerForwardingruleHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetConnectTimeout">ResetConnectTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetRetries">ResetRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetTargetTimeout">ResetTargetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetClientTimeout"></a>

```csharp
private void ResetClientTimeout()
```

##### `ResetConnectTimeout` <a name="ResetConnectTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetConnectTimeout"></a>

```csharp
private void ResetConnectTimeout()
```

##### `ResetRetries` <a name="ResetRetries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetRetries"></a>

```csharp
private void ResetRetries()
```

##### `ResetTargetTimeout` <a name="ResetTargetTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.resetTargetTimeout"></a>

```csharp
private void ResetTargetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeoutInput">ConnectTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retriesInput">RetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeoutInput">TargetTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout">ClientTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout">ConnectTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries">Retries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout">TargetTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeoutInput"></a>

```csharp
public double ClientTimeoutInput { get; }
```

- *Type:* double

---

##### `ConnectTimeoutInput`<sup>Optional</sup> <a name="ConnectTimeoutInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeoutInput"></a>

```csharp
public double ConnectTimeoutInput { get; }
```

- *Type:* double

---

##### `RetriesInput`<sup>Optional</sup> <a name="RetriesInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retriesInput"></a>

```csharp
public double RetriesInput { get; }
```

- *Type:* double

---

##### `TargetTimeoutInput`<sup>Optional</sup> <a name="TargetTimeoutInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeoutInput"></a>

```csharp
public double TargetTimeoutInput { get; }
```

- *Type:* double

---

##### `ClientTimeout`<sup>Required</sup> <a name="ClientTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.clientTimeout"></a>

```csharp
public double ClientTimeout { get; }
```

- *Type:* double

---

##### `ConnectTimeout`<sup>Required</sup> <a name="ConnectTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.connectTimeout"></a>

```csharp
public double ConnectTimeout { get; }
```

- *Type:* double

---

##### `Retries`<sup>Required</sup> <a name="Retries" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.retries"></a>

```csharp
public double Retries { get; }
```

- *Type:* double

---

##### `TargetTimeout`<sup>Required</sup> <a name="TargetTimeout" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.targetTimeout"></a>

```csharp
public double TargetTimeout { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheckOutputReference.property.internalValue"></a>

```csharp
public NetworkloadbalancerForwardingruleHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleHealthCheck">NetworkloadbalancerForwardingruleHealthCheck</a>

---


### NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference <a name="NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheck">ResetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheckInterval">ResetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetMaintenance">ResetMaintenance</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCheck` <a name="ResetCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheck"></a>

```csharp
private void ResetCheck()
```

##### `ResetCheckInterval` <a name="ResetCheckInterval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetCheckInterval"></a>

```csharp
private void ResetCheckInterval()
```

##### `ResetMaintenance` <a name="ResetMaintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.resetMaintenance"></a>

```csharp
private void ResetMaintenance()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInput">CheckInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkIntervalInput">CheckIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenanceInput">MaintenanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check">Check</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval">CheckInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance">Maintenance</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CheckInput`<sup>Optional</sup> <a name="CheckInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInput"></a>

```csharp
public object CheckInput { get; }
```

- *Type:* object

---

##### `CheckIntervalInput`<sup>Optional</sup> <a name="CheckIntervalInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkIntervalInput"></a>

```csharp
public double CheckIntervalInput { get; }
```

- *Type:* double

---

##### `MaintenanceInput`<sup>Optional</sup> <a name="MaintenanceInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenanceInput"></a>

```csharp
public object MaintenanceInput { get; }
```

- *Type:* object

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.check"></a>

```csharp
public object Check { get; }
```

- *Type:* object

---

##### `CheckInterval`<sup>Required</sup> <a name="CheckInterval" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.checkInterval"></a>

```csharp
public double CheckInterval { get; }
```

- *Type:* double

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.maintenance"></a>

```csharp
public object Maintenance { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference.property.internalValue"></a>

```csharp
public NetworkloadbalancerForwardingruleTargetsHealthCheck InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---


### NetworkloadbalancerForwardingruleTargetsList <a name="NetworkloadbalancerForwardingruleTargetsList" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get"></a>

```csharp
private NetworkloadbalancerForwardingruleTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkloadbalancerForwardingruleTargetsOutputReference <a name="NetworkloadbalancerForwardingruleTargetsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetProxyProtocol">ResetProxyProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck"></a>

```csharp
private void PutHealthCheck(NetworkloadbalancerForwardingruleTargetsHealthCheck Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetHealthCheck"></a>

```csharp
private void ResetHealthCheck()
```

##### `ResetProxyProtocol` <a name="ResetProxyProtocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.resetProxyProtocol"></a>

```csharp
private void ResetProxyProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference">NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocolInput">ProxyProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol">ProxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheck"></a>

```csharp
public NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference HealthCheck { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference">NetworkloadbalancerForwardingruleTargetsHealthCheckOutputReference</a>

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.healthCheckInput"></a>

```csharp
public NetworkloadbalancerForwardingruleTargetsHealthCheck HealthCheckInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsHealthCheck">NetworkloadbalancerForwardingruleTargetsHealthCheck</a>

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ProxyProtocolInput`<sup>Optional</sup> <a name="ProxyProtocolInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocolInput"></a>

```csharp
public string ProxyProtocolInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProxyProtocol`<sup>Required</sup> <a name="ProxyProtocol" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.proxyProtocol"></a>

```csharp
public string ProxyProtocol { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTargetsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### NetworkloadbalancerForwardingruleTimeoutsOutputReference <a name="NetworkloadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new NetworkloadbalancerForwardingruleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.networkloadbalancerForwardingrule.NetworkloadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



