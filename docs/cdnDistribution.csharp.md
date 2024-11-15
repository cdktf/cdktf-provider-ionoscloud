# `cdnDistribution` Submodule <a name="`cdnDistribution` Submodule" id="@cdktf/provider-ionoscloud.cdnDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CdnDistribution <a name="CdnDistribution" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution ionoscloud_cdn_distribution}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistribution(Construct Scope, string Id, CdnDistributionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig">CdnDistributionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig">CdnDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules">PutRoutingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRoutingRules` <a name="PutRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules"></a>

```csharp
private void PutRoutingRules(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putRoutingRules.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts"></a>

```csharp
private void PutTimeouts(CdnDistributionTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

---

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CdnDistribution.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CdnDistribution.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CdnDistribution.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

CdnDistribution.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CdnDistribution resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CdnDistribution to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CdnDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CdnDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4">PublicEndpointV4</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6">PublicEndpointV6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn">ResourceUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules">RoutingRules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput">RoutingRulesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PublicEndpointV4`<sup>Required</sup> <a name="PublicEndpointV4" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV4"></a>

```csharp
public string PublicEndpointV4 { get; }
```

- *Type:* string

---

##### `PublicEndpointV6`<sup>Required</sup> <a name="PublicEndpointV6" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.publicEndpointV6"></a>

```csharp
public string PublicEndpointV6 { get; }
```

- *Type:* string

---

##### `ResourceUrn`<sup>Required</sup> <a name="ResourceUrn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.resourceUrn"></a>

```csharp
public string ResourceUrn { get; }
```

- *Type:* string

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRules"></a>

```csharp
public CdnDistributionRoutingRulesList RoutingRules { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList">CdnDistributionRoutingRulesList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeouts"></a>

```csharp
public CdnDistributionTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference">CdnDistributionTimeoutsOutputReference</a>

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RoutingRulesInput`<sup>Optional</sup> <a name="RoutingRulesInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.routingRulesInput"></a>

```csharp
public object RoutingRulesInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistribution.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CdnDistributionConfig <a name="CdnDistributionConfig" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Domain,
    object RoutingRules,
    string CertificateId = null,
    string Id = null,
    CdnDistributionTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain">Domain</a></code> | <code>string</code> | The domain of the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules">RoutingRules</a></code> | <code>object</code> | routing_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId">CertificateId</a></code> | <code>string</code> | The ID of the certificate to use for the distribution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#id CdnDistribution#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The domain of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#domain CdnDistribution#domain}

---

##### `RoutingRules`<sup>Required</sup> <a name="RoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.routingRules"></a>

```csharp
public object RoutingRules { get; set; }
```

- *Type:* object

routing_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#routing_rules CdnDistribution#routing_rules}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

The ID of the certificate to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#certificate_id CdnDistribution#certificate_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#id CdnDistribution#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionConfig.property.timeouts"></a>

```csharp
public CdnDistributionTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts">CdnDistributionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#timeouts CdnDistribution#timeouts}

---

### CdnDistributionRoutingRules <a name="CdnDistributionRoutingRules" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRules {
    string Prefix,
    string Scheme,
    CdnDistributionRoutingRulesUpstream Upstream
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix">Prefix</a></code> | <code>string</code> | The prefix of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme">Scheme</a></code> | <code>string</code> | The scheme of the routing rule. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream">Upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | upstream block. |

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The prefix of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#prefix CdnDistribution#prefix}

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

The scheme of the routing rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#scheme CdnDistribution#scheme}

---

##### `Upstream`<sup>Required</sup> <a name="Upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRules.property.upstream"></a>

```csharp
public CdnDistributionRoutingRulesUpstream Upstream { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

upstream block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#upstream CdnDistribution#upstream}

---

### CdnDistributionRoutingRulesUpstream <a name="CdnDistributionRoutingRulesUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRulesUpstream {
    object Caching,
    string Host,
    string RateLimitClass,
    string SniMode,
    object Waf,
    CdnDistributionRoutingRulesUpstreamGeoRestrictions GeoRestrictions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching">Caching</a></code> | <code>object</code> | Enable or disable caching. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host">Host</a></code> | <code>string</code> | The upstream host that handles the requests if not already cached. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass">RateLimitClass</a></code> | <code>string</code> | Rate limit class that will be applied to limit the number of incoming requests per IP. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode">SniMode</a></code> | <code>string</code> | The SNI (Server Name Indication) mode of the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf">Waf</a></code> | <code>object</code> | Enable or disable WAF to protect the upstream host. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | geo_restrictions block. |

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.caching"></a>

```csharp
public object Caching { get; set; }
```

- *Type:* object

Enable or disable caching.

If enabled, the CDN will cache the responses from the upstream host. Subsequent requests for the same resource will be served from the cache.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#caching CdnDistribution#caching}

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

The upstream host that handles the requests if not already cached.

This host will be protected by the WAF if the option is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#host CdnDistribution#host}

---

##### `RateLimitClass`<sup>Required</sup> <a name="RateLimitClass" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.rateLimitClass"></a>

```csharp
public string RateLimitClass { get; set; }
```

- *Type:* string

Rate limit class that will be applied to limit the number of incoming requests per IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#rate_limit_class CdnDistribution#rate_limit_class}

---

##### `SniMode`<sup>Required</sup> <a name="SniMode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.sniMode"></a>

```csharp
public string SniMode { get; set; }
```

- *Type:* string

The SNI (Server Name Indication) mode of the upstream host.

It supports two modes: 'distribution' and 'origin', for more information about these modes please check the resource docs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#sni_mode CdnDistribution#sni_mode}

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.waf"></a>

```csharp
public object Waf { get; set; }
```

- *Type:* object

Enable or disable WAF to protect the upstream host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#waf CdnDistribution#waf}

---

##### `GeoRestrictions`<sup>Optional</sup> <a name="GeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream.property.geoRestrictions"></a>

```csharp
public CdnDistributionRoutingRulesUpstreamGeoRestrictions GeoRestrictions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

geo_restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#geo_restrictions CdnDistribution#geo_restrictions}

---

### CdnDistributionRoutingRulesUpstreamGeoRestrictions <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRulesUpstreamGeoRestrictions {
    string[] AllowList = null,
    string[] BlockList = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList">AllowList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList">BlockList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}. |

---

##### `AllowList`<sup>Optional</sup> <a name="AllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.allowList"></a>

```csharp
public string[] AllowList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#allow_list CdnDistribution#allow_list}.

---

##### `BlockList`<sup>Optional</sup> <a name="BlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions.property.blockList"></a>

```csharp
public string[] BlockList { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#block_list CdnDistribution#block_list}.

---

### CdnDistributionTimeouts <a name="CdnDistributionTimeouts" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionTimeouts {
    string Create = null,
    string Default = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#create CdnDistribution#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default">Default</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#default CdnDistribution#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#delete CdnDistribution#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#update CdnDistribution#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#create CdnDistribution#create}.

---

##### `Default`<sup>Optional</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.default"></a>

```csharp
public string Default { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#default CdnDistribution#default}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#delete CdnDistribution#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.2/docs/resources/cdn_distribution#update CdnDistribution#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CdnDistributionRoutingRulesList <a name="CdnDistributionRoutingRulesList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get"></a>

```csharp
private CdnDistributionRoutingRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CdnDistributionRoutingRulesOutputReference <a name="CdnDistributionRoutingRulesOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream">PutUpstream</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUpstream` <a name="PutUpstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream"></a>

```csharp
private void PutUpstream(CdnDistributionRoutingRulesUpstream Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.putUpstream.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream">Upstream</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput">UpstreamInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Upstream`<sup>Required</sup> <a name="Upstream" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstream"></a>

```csharp
public CdnDistributionRoutingRulesUpstreamOutputReference Upstream { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference">CdnDistributionRoutingRulesUpstreamOutputReference</a>

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `UpstreamInput`<sup>Optional</sup> <a name="UpstreamInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.upstreamInput"></a>

```csharp
public CdnDistributionRoutingRulesUpstream UpstreamInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference <a name="CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList">ResetAllowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList">ResetBlockList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowList` <a name="ResetAllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetAllowList"></a>

```csharp
private void ResetAllowList()
```

##### `ResetBlockList` <a name="ResetBlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.resetBlockList"></a>

```csharp
private void ResetBlockList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput">AllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput">BlockListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList">AllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList">BlockList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowListInput`<sup>Optional</sup> <a name="AllowListInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowListInput"></a>

```csharp
public string[] AllowListInput { get; }
```

- *Type:* string[]

---

##### `BlockListInput`<sup>Optional</sup> <a name="BlockListInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockListInput"></a>

```csharp
public string[] BlockListInput { get; }
```

- *Type:* string[]

---

##### `AllowList`<sup>Required</sup> <a name="AllowList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.allowList"></a>

```csharp
public string[] AllowList { get; }
```

- *Type:* string[]

---

##### `BlockList`<sup>Required</sup> <a name="BlockList" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.blockList"></a>

```csharp
public string[] BlockList { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference.property.internalValue"></a>

```csharp
public CdnDistributionRoutingRulesUpstreamGeoRestrictions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---


### CdnDistributionRoutingRulesUpstreamOutputReference <a name="CdnDistributionRoutingRulesUpstreamOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionRoutingRulesUpstreamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions">PutGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions">ResetGeoRestrictions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGeoRestrictions` <a name="PutGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions"></a>

```csharp
private void PutGeoRestrictions(CdnDistributionRoutingRulesUpstreamGeoRestrictions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.putGeoRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `ResetGeoRestrictions` <a name="ResetGeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.resetGeoRestrictions"></a>

```csharp
private void ResetGeoRestrictions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions">GeoRestrictions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput">CachingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput">GeoRestrictionsInput</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput">RateLimitClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput">SniModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput">WafInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching">Caching</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass">RateLimitClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode">SniMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf">Waf</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GeoRestrictions`<sup>Required</sup> <a name="GeoRestrictions" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictions"></a>

```csharp
public CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference GeoRestrictions { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference">CdnDistributionRoutingRulesUpstreamGeoRestrictionsOutputReference</a>

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.cachingInput"></a>

```csharp
public object CachingInput { get; }
```

- *Type:* object

---

##### `GeoRestrictionsInput`<sup>Optional</sup> <a name="GeoRestrictionsInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.geoRestrictionsInput"></a>

```csharp
public CdnDistributionRoutingRulesUpstreamGeoRestrictions GeoRestrictionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamGeoRestrictions">CdnDistributionRoutingRulesUpstreamGeoRestrictions</a>

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `RateLimitClassInput`<sup>Optional</sup> <a name="RateLimitClassInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClassInput"></a>

```csharp
public string RateLimitClassInput { get; }
```

- *Type:* string

---

##### `SniModeInput`<sup>Optional</sup> <a name="SniModeInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniModeInput"></a>

```csharp
public string SniModeInput { get; }
```

- *Type:* string

---

##### `WafInput`<sup>Optional</sup> <a name="WafInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.wafInput"></a>

```csharp
public object WafInput { get; }
```

- *Type:* object

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.caching"></a>

```csharp
public object Caching { get; }
```

- *Type:* object

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `RateLimitClass`<sup>Required</sup> <a name="RateLimitClass" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.rateLimitClass"></a>

```csharp
public string RateLimitClass { get; }
```

- *Type:* string

---

##### `SniMode`<sup>Required</sup> <a name="SniMode" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.sniMode"></a>

```csharp
public string SniMode { get; }
```

- *Type:* string

---

##### `Waf`<sup>Required</sup> <a name="Waf" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.waf"></a>

```csharp
public object Waf { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstreamOutputReference.property.internalValue"></a>

```csharp
public CdnDistributionRoutingRulesUpstream InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionRoutingRulesUpstream">CdnDistributionRoutingRulesUpstream</a>

---


### CdnDistributionTimeoutsOutputReference <a name="CdnDistributionTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new CdnDistributionTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault">ResetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDefault` <a name="ResetDefault" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDefault"></a>

```csharp
private void ResetDefault()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput">DefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default">Default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DefaultInput`<sup>Optional</sup> <a name="DefaultInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.defaultInput"></a>

```csharp
public string DefaultInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Default`<sup>Required</sup> <a name="Default" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.default"></a>

```csharp
public string Default { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.cdnDistribution.CdnDistributionTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



