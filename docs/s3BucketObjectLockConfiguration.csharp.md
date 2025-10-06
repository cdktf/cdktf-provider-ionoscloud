# `s3BucketObjectLockConfiguration` Submodule <a name="`s3BucketObjectLockConfiguration` Submodule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObjectLockConfiguration <a name="S3BucketObjectLockConfiguration" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration ionoscloud_s3_bucket_object_lock_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3BucketObjectLockConfiguration(Construct Scope, string Id, S3BucketObjectLockConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig">S3BucketObjectLockConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig">S3BucketObjectLockConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetObjectLockEnabled">ResetObjectLockEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetRule">ResetRule</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.putRule"></a>

```csharp
private void PutRule(S3BucketObjectLockConfigurationRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `ResetObjectLockEnabled` <a name="ResetObjectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetObjectLockEnabled"></a>

```csharp
private void ResetObjectLockEnabled()
```

##### `ResetRule` <a name="ResetRule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.resetRule"></a>

```csharp
private void ResetRule()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a S3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3BucketObjectLockConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3BucketObjectLockConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3BucketObjectLockConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

S3BucketObjectLockConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a S3BucketObjectLockConfiguration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3BucketObjectLockConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3BucketObjectLockConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the S3BucketObjectLockConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabledInput">ObjectLockEnabledInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.ruleInput">RuleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabled">ObjectLockEnabled</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.rule"></a>

```csharp
public S3BucketObjectLockConfigurationRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference">S3BucketObjectLockConfigurationRuleOutputReference</a>

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ObjectLockEnabledInput`<sup>Optional</sup> <a name="ObjectLockEnabledInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabledInput"></a>

```csharp
public string ObjectLockEnabledInput { get; }
```

- *Type:* string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.ruleInput"></a>

```csharp
public IResolvable|S3BucketObjectLockConfigurationRule RuleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `ObjectLockEnabled`<sup>Required</sup> <a name="ObjectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.objectLockEnabled"></a>

```csharp
public string ObjectLockEnabled { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectLockConfigurationConfig <a name="S3BucketObjectLockConfigurationConfig" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3BucketObjectLockConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Bucket,
    string ObjectLockEnabled = null,
    S3BucketObjectLockConfigurationRule Rule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.objectLockEnabled">ObjectLockEnabled</a></code> | <code>string</code> | Specifies whether Object Lock is enabled for the bucket. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.rule">Rule</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | rule block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#bucket S3BucketObjectLockConfiguration#bucket}

---

##### `ObjectLockEnabled`<sup>Optional</sup> <a name="ObjectLockEnabled" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.objectLockEnabled"></a>

```csharp
public string ObjectLockEnabled { get; set; }
```

- *Type:* string

Specifies whether Object Lock is enabled for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#object_lock_enabled S3BucketObjectLockConfiguration#object_lock_enabled}

---

##### `Rule`<sup>Optional</sup> <a name="Rule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationConfig.property.rule"></a>

```csharp
public S3BucketObjectLockConfigurationRule Rule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#rule S3BucketObjectLockConfiguration#rule}

---

### S3BucketObjectLockConfigurationRule <a name="S3BucketObjectLockConfigurationRule" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3BucketObjectLockConfigurationRule {
    S3BucketObjectLockConfigurationRuleDefaultRetention DefaultRetention = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | default_retention block. |

---

##### `DefaultRetention`<sup>Optional</sup> <a name="DefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule.property.defaultRetention"></a>

```csharp
public S3BucketObjectLockConfigurationRuleDefaultRetention DefaultRetention { get; set; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

default_retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#default_retention S3BucketObjectLockConfiguration#default_retention}

---

### S3BucketObjectLockConfigurationRuleDefaultRetention <a name="S3BucketObjectLockConfigurationRuleDefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3BucketObjectLockConfigurationRuleDefaultRetention {
    double Days = null,
    string Mode = null,
    double Years = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days">Days</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfiguration#days}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode">Mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfiguration#mode}. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years">Years</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfiguration#years}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.days"></a>

```csharp
public double Days { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#days S3BucketObjectLockConfiguration#days}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#mode S3BucketObjectLockConfiguration#mode}.

---

##### `Years`<sup>Optional</sup> <a name="Years" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention.property.years"></a>

```csharp
public double Years { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.15/docs/resources/s3_bucket_object_lock_configuration#years S3BucketObjectLockConfiguration#years}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference <a name="S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears">ResetYears</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetMode` <a name="ResetMode" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetYears` <a name="ResetYears" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.resetYears"></a>

```csharp
private void ResetYears()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput">DaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput">YearsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days">Days</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years">Years</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.daysInput"></a>

```csharp
public double DaysInput { get; }
```

- *Type:* double

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `YearsInput`<sup>Optional</sup> <a name="YearsInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.yearsInput"></a>

```csharp
public double YearsInput { get; }
```

- *Type:* double

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.days"></a>

```csharp
public double Days { get; }
```

- *Type:* double

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Years`<sup>Required</sup> <a name="Years" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.years"></a>

```csharp
public double Years { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketObjectLockConfigurationRuleDefaultRetention InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---


### S3BucketObjectLockConfigurationRuleOutputReference <a name="S3BucketObjectLockConfigurationRuleOutputReference" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Ionoscloud;

new S3BucketObjectLockConfigurationRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention">PutDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resetDefaultRetention">ResetDefaultRetention</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultRetention` <a name="PutDefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention"></a>

```csharp
private void PutDefaultRetention(S3BucketObjectLockConfigurationRuleDefaultRetention Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.putDefaultRetention.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---

##### `ResetDefaultRetention` <a name="ResetDefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.resetDefaultRetention"></a>

```csharp
private void ResetDefaultRetention()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention">DefaultRetention</a></code> | <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput">DefaultRetentionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultRetention`<sup>Required</sup> <a name="DefaultRetention" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetention"></a>

```csharp
public S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference DefaultRetention { get; }
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference">S3BucketObjectLockConfigurationRuleDefaultRetentionOutputReference</a>

---

##### `DefaultRetentionInput`<sup>Optional</sup> <a name="DefaultRetentionInput" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.defaultRetentionInput"></a>

```csharp
public IResolvable|S3BucketObjectLockConfigurationRuleDefaultRetention DefaultRetentionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleDefaultRetention">S3BucketObjectLockConfigurationRuleDefaultRetention</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|S3BucketObjectLockConfigurationRule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-ionoscloud.s3BucketObjectLockConfiguration.S3BucketObjectLockConfigurationRule">S3BucketObjectLockConfigurationRule</a>

---



