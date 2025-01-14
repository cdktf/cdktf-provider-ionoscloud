# `datacenter` Submodule <a name="`datacenter` Submodule" id="@cdktf/provider-ionoscloud.datacenter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Datacenter <a name="Datacenter" id="@cdktf/provider-ionoscloud.datacenter.Datacenter"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter ionoscloud_datacenter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new Datacenter(Construct Scope, string Id, DatacenterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig">DatacenterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig">DatacenterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.resetSecAuthProtection">ResetSecAuthProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.putTimeouts"></a>

```csharp
private void PutTimeouts(DatacenterTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts">DatacenterTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecAuthProtection` <a name="ResetSecAuthProtection" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.resetSecAuthProtection"></a>

```csharp
private void ResetSecAuthProtection()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Datacenter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Datacenter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Datacenter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Datacenter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

Datacenter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Datacenter resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Datacenter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Datacenter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Datacenter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.cpuArchitecture">CpuArchitecture</a></code> | <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList">DatacenterCpuArchitectureList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.features">Features</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.ipv6CidrBlock">Ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference">DatacenterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.secAuthProtectionInput">SecAuthProtectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.secAuthProtection">SecAuthProtection</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CpuArchitecture`<sup>Required</sup> <a name="CpuArchitecture" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.cpuArchitecture"></a>

```csharp
public DatacenterCpuArchitectureList CpuArchitecture { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList">DatacenterCpuArchitectureList</a>

---

##### `Features`<sup>Required</sup> <a name="Features" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.features"></a>

```csharp
public string[] Features { get; }
```

- *Type:* string[]

---

##### `Ipv6CidrBlock`<sup>Required</sup> <a name="Ipv6CidrBlock" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.ipv6CidrBlock"></a>

```csharp
public string Ipv6CidrBlock { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.timeouts"></a>

```csharp
public DatacenterTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference">DatacenterTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecAuthProtectionInput`<sup>Optional</sup> <a name="SecAuthProtectionInput" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.secAuthProtectionInput"></a>

```csharp
public object SecAuthProtectionInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecAuthProtection`<sup>Required</sup> <a name="SecAuthProtection" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.secAuthProtection"></a>

```csharp
public object SecAuthProtection { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.Datacenter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.datacenter.Datacenter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatacenterConfig <a name="DatacenterConfig" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DatacenterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Name,
    string Description = null,
    string Id = null,
    object SecAuthProtection = null,
    DatacenterTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#location Datacenter#location}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#name Datacenter#name}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.description">Description</a></code> | <code>string</code> | A description for the datacenter, e.g. staging, production. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#id Datacenter#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.secAuthProtection">SecAuthProtection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#sec_auth_protection Datacenter#sec_auth_protection}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts">DatacenterTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#location Datacenter#location}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#name Datacenter#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description for the datacenter, e.g. staging, production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#description Datacenter#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#id Datacenter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecAuthProtection`<sup>Optional</sup> <a name="SecAuthProtection" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.secAuthProtection"></a>

```csharp
public object SecAuthProtection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#sec_auth_protection Datacenter#sec_auth_protection}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.datacenter.DatacenterConfig.property.timeouts"></a>

```csharp
public DatacenterTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts">DatacenterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#timeouts Datacenter#timeouts}

---

### DatacenterCpuArchitecture <a name="DatacenterCpuArchitecture" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitecture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitecture.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DatacenterCpuArchitecture {

};
```


### DatacenterTimeouts <a name="DatacenterTimeouts" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DatacenterTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#create Datacenter#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#default Datacenter#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#delete Datacenter#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#update Datacenter#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#create Datacenter#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#default Datacenter#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#delete Datacenter#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.9/docs/resources/datacenter#update Datacenter#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatacenterCpuArchitectureList <a name="DatacenterCpuArchitectureList" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DatacenterCpuArchitectureList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.get"></a>

```csharp
private DatacenterCpuArchitectureOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DatacenterCpuArchitectureOutputReference <a name="DatacenterCpuArchitectureOutputReference" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DatacenterCpuArchitectureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.cpuFamily">CpuFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.maxCores">MaxCores</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.maxRam">MaxRam</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.vendor">Vendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitecture">DatacenterCpuArchitecture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuFamily`<sup>Required</sup> <a name="CpuFamily" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.cpuFamily"></a>

```csharp
public string CpuFamily { get; }
```

- *Type:* string

---

##### `MaxCores`<sup>Required</sup> <a name="MaxCores" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.maxCores"></a>

```csharp
public double MaxCores { get; }
```

- *Type:* double

---

##### `MaxRam`<sup>Required</sup> <a name="MaxRam" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.maxRam"></a>

```csharp
public double MaxRam { get; }
```

- *Type:* double

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.vendor"></a>

```csharp
public string Vendor { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitectureOutputReference.property.internalValue"></a>

```csharp
public DatacenterCpuArchitecture InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterCpuArchitecture">DatacenterCpuArchitecture</a>

---


### DatacenterTimeoutsOutputReference <a name="DatacenterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new DatacenterTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.datacenter.DatacenterTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



