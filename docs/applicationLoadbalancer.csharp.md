# `ionoscloud_application_loadbalancer`

Refer to the Terraform Registory for docs: [`ionoscloud_application_loadbalancer`](https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer).

# `applicationLoadbalancer` Submodule <a name="`applicationLoadbalancer` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancer <a name="ApplicationLoadbalancer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer ionoscloud_application_loadbalancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancer(Construct Scope, string Id, ApplicationLoadbalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig">ApplicationLoadbalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig">ApplicationLoadbalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps">ResetIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps">ResetLbPrivateIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts"></a>

```csharp
private void PutTimeouts(ApplicationLoadbalancerTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIps` <a name="ResetIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetIps"></a>

```csharp
private void ResetIps()
```

##### `ResetLbPrivateIps` <a name="ResetLbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetLbPrivateIps"></a>

```csharp
private void ResetLbPrivateIps()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

ApplicationLoadbalancer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationLoadbalancer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationLoadbalancer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationLoadbalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadbalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput">DatacenterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput">IpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput">LbPrivateIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput">ListenerLanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput">TargetLanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId">DatacenterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips">Ips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps">LbPrivateIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan">ListenerLan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan">TargetLan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeouts"></a>

```csharp
public ApplicationLoadbalancerTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference">ApplicationLoadbalancerTimeoutsOutputReference</a>

---

##### `DatacenterIdInput`<sup>Optional</sup> <a name="DatacenterIdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterIdInput"></a>

```csharp
public string DatacenterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpsInput`<sup>Optional</sup> <a name="IpsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ipsInput"></a>

```csharp
public string[] IpsInput { get; }
```

- *Type:* string[]

---

##### `LbPrivateIpsInput`<sup>Optional</sup> <a name="LbPrivateIpsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIpsInput"></a>

```csharp
public string[] LbPrivateIpsInput { get; }
```

- *Type:* string[]

---

##### `ListenerLanInput`<sup>Optional</sup> <a name="ListenerLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLanInput"></a>

```csharp
public double ListenerLanInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetLanInput`<sup>Optional</sup> <a name="TargetLanInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLanInput"></a>

```csharp
public double TargetLanInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.datacenterId"></a>

```csharp
public string DatacenterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ips`<sup>Required</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.ips"></a>

```csharp
public string[] Ips { get; }
```

- *Type:* string[]

---

##### `LbPrivateIps`<sup>Required</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.lbPrivateIps"></a>

```csharp
public string[] LbPrivateIps { get; }
```

- *Type:* string[]

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.listenerLan"></a>

```csharp
public double ListenerLan { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.targetLan"></a>

```csharp
public double TargetLan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerConfig <a name="ApplicationLoadbalancerConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatacenterId,
    double ListenerLan,
    string Name,
    double TargetLan,
    string Id = null,
    string[] Ips = null,
    string[] LbPrivateIps = null,
    ApplicationLoadbalancerTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId">DatacenterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan">ListenerLan</a></code> | <code>double</code> | ID of the listening (inbound) LAN. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name">Name</a></code> | <code>string</code> | The name of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan">TargetLan</a></code> | <code>double</code> | ID of the balanced private target LAN (outbound). |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips">Ips</a></code> | <code>string[]</code> | Collection of the Application Load Balancer IP addresses. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps">LbPrivateIps</a></code> | <code>string[]</code> | Collection of private IP addresses with the subnet mask of the Application Load Balancer. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatacenterId`<sup>Required</sup> <a name="DatacenterId" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.datacenterId"></a>

```csharp
public string DatacenterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#datacenter_id ApplicationLoadbalancer#datacenter_id}.

---

##### `ListenerLan`<sup>Required</sup> <a name="ListenerLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.listenerLan"></a>

```csharp
public double ListenerLan { get; set; }
```

- *Type:* double

ID of the listening (inbound) LAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#listener_lan ApplicationLoadbalancer#listener_lan}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Application Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#name ApplicationLoadbalancer#name}

---

##### `TargetLan`<sup>Required</sup> <a name="TargetLan" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.targetLan"></a>

```csharp
public double TargetLan { get; set; }
```

- *Type:* double

ID of the balanced private target LAN (outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#target_lan ApplicationLoadbalancer#target_lan}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#id ApplicationLoadbalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ips`<sup>Optional</sup> <a name="Ips" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.ips"></a>

```csharp
public string[] Ips { get; set; }
```

- *Type:* string[]

Collection of the Application Load Balancer IP addresses.

(Inbound and outbound) IPs of the listenerLan are customer-reserved public IPs for the public Load Balancers, and private IPs for the private Load Balancers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#ips ApplicationLoadbalancer#ips}

---

##### `LbPrivateIps`<sup>Optional</sup> <a name="LbPrivateIps" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.lbPrivateIps"></a>

```csharp
public string[] LbPrivateIps { get; set; }
```

- *Type:* string[]

Collection of private IP addresses with the subnet mask of the Application Load Balancer.

IPs must contain valid a subnet mask. If no IP is provided, the system will generate an IP with /24 subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#lb_private_ips ApplicationLoadbalancer#lb_private_ips}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerConfig.property.timeouts"></a>

```csharp
public ApplicationLoadbalancerTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts">ApplicationLoadbalancerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#timeouts ApplicationLoadbalancer#timeouts}

---

### ApplicationLoadbalancerTimeouts <a name="ApplicationLoadbalancerTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#create ApplicationLoadbalancer#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#default ApplicationLoadbalancer#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#delete ApplicationLoadbalancer#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.4.9/docs/resources/application_loadbalancer#update ApplicationLoadbalancer#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerTimeoutsOutputReference <a name="ApplicationLoadbalancerTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new ApplicationLoadbalancerTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.applicationLoadbalancer.ApplicationLoadbalancerTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



